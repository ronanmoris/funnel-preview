"use client"

import { ChangeEvent, useState } from "react"
import FunnelPage from "./funnel-page";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface FunnelContainerProps {
  data: FunnelData
}

export default function FunnelContainer({ data }: FunnelContainerProps) {
  const [jsonData, setJsonData] = useState(data);
  const [page, setPage] = useState(0)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return

    const file = e.target?.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      if (!event.target?.result) return

      const fileContent = event.target.result;
      const parsedData = JSON.parse(fileContent as string);
      setJsonData(parsedData);
    };

    reader.readAsText(file);
  };

  const handleNextPage = () => {
    setPage((page) => page < jsonData.pages.length - 1 ? page + 1 : page)
  }

  const handlePrevPage = () => {
    setPage((page) => page > 0 ? page - 1 : 0)
  }

  return (
    <>
      <div className="flex justify-between items-center mt-4" >
        <div className="items-center w-[230px] sm:w-auto">
          <Label htmlFor="json-file" />
          <Input id="json-file" type="file" name="json-file" accept=".json" onChange={handleFileChange} />
        </div>

        <div>
          <Button variant="outline" size="sm" aria-label="previous-page" onClick={handlePrevPage}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button className="ml-2" variant="outline" size="sm" aria-label='next-page' onClick={handleNextPage}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className='rounded-lg pt-6 mt-10' style={{ backgroundColor: jsonData.bgColor }} >
        <h1 className='text-4xl font-extrabold tracking-tight lg:text-5xl text-center'>{jsonData.name}</h1>
        <FunnelPage page={jsonData.pages[page]} />
      </div >
    </>
  )
}
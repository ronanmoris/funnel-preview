"use client"

import { ChangeEvent, useState } from "react"
import FunnelPage from "./funnel-page";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

interface FunnelContainerProps {
  data: FunnelData
}

export default function FunnelContainer({ data }: FunnelContainerProps) {
  const [jsonData, setJsonData] = useState(data);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  let page = Number(searchParams.get('page')) ?? 1

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
    let nextPage

    if (page && page < jsonData.pages.length - 1) {
      nextPage = page + 1
    } else {
      nextPage = 1
    }
    const params = new URLSearchParams(searchParams);
    params.set('page', String(nextPage))
    replace(`${pathname}?${params}`);
  }

  const handlePrevPage = () => {
    let prevPage
    
    if (page && page > 0) {
      prevPage = page - 1
    } else {
      prevPage = page
    }
    const params = new URLSearchParams(searchParams);
    params.set('page', String(prevPage))
    replace(`${pathname}?${params}`);
  }

  return (
    <>
      <div className="flex justify-between items-center mt-4" >
        <div className="items-center w-[230px] sm:w-auto">
          <Label htmlFor="json-file" />
          <Input id="json-file" type="file" name="json-file" accept=".json" onChange={handleFileChange} />
        </div>

        <div>
          <Button variant="outline" size="sm" aria-label="previous-page" onClick={handlePrevPage} disabled={page === 0}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button className="ml-2" variant="outline" size="sm" aria-label='next-page' onClick={handleNextPage} disabled={page === jsonData.pages.length - 1}>
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
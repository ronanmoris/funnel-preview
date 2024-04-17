This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## What would be the next steps

### Unit tests
- I would use React Testing Library. Make sure the tests resemble how the user interacts with the page, also enforcing some good practices for accessibility.

### Next features
- I would use url state management to control the page the user is currently seeing. This would allow the users to refresh the page and still see the page they were at before but also be able to send the url to someone   implement the pages control as a url state. Doing so, the user would be able to copy the url at a given page and send it to someone and
- Add proper linting
- I would use url state management to control the page the user is currently seeing. This would allow users to refresh the page and still see the page they were at before and also to be able to send the url to someone at the exact page they want to show.
- Add drag and drop to upload files

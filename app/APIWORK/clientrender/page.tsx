'use client'
import useSWR from 'swr'

const url = 'https://api.quotable.io/random?tags=technology';

const fetcher = (url: any) => fetch(url).then((res) => res.json());

 function Page() {
  const {data, error, isLoading} = useSWR(url, fetcher);
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return (
    <div>{data.content}</div>
  );
}
export default Page
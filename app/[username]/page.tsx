import { Suspense } from "react";

interface User {
    data: {
      id: number;
      email: string;
      first_name: string;
      last_name: string;
      avatar: string;
    };
    support: {
      url: string;
      text: string;
    };
  }
  interface Color {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
  }
  
  interface ColorsData {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Color[];
    support: {
      url: string;
      text: string;
    };
  }
  
async function getUser(username:string) {
    const res = await fetch(`https://reqres.in/api/users/${username}`);
    return res.json();
  }
  
  async function getResources() {
    const res = await fetch(`https://reqres.in/api/unknown`);
    return res.json();
  }
  
  export default async function Page({ params }: {
    params: { username: string },
  }) {
    // Initiate both requests in parallel
    const userData: User = await getUser(params.username);
    const resourceData: ColorsData = await getResources();
  
    // Wait for the colors promise to resolve first
    const colors = await resourceData;
  
    return (
      <>
        <h1>{userData.data.first_name}</h1>
        {/* Send the colors information first,
        and wrap albums in a suspense boundary */}
        <Suspense fallback={<div>Loading...</div>}>
          <Resources promise={resourceData} />
        </Suspense>
      </>
    );
  }
  
  async function Resources({ promise }: { promise: Promise<ColorsData> }) {
    // Wait for the colors promise to resolve
    const colorsData = await promise;
  
    return (
      <ul>
        {colorsData.data.map((color) => (
          <li key={color.id}>{color.name}</li>
        ))}
      </ul>
    );
  }
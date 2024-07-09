import axios from 'axios';
import { useState, useEffect } from 'react';

import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import AppWidgetSummary from 'src/sections/overview/app-widget-summary';


export default function UserPage() {
  const [data, setData] = useState([])

  useEffect(() =>{
      const fetchData = async () =>{
        try{
          const response = await axios.get("https://remitwise-server.vercel.app/api");
          setData(response.data.slice(0,53));
        }catch(error){
          console.log("Error fetching data:", error);
        }
      }
      fetchData();
    },[]);

  return (
    <Container maxWidth="xl">
    <Typography variant="h3" sx={{ mb: 5 }}>
      Graph Report
    </Typography>
    <Grid container spacing={3}>
      <Grid xs={12} sm={6} md={3}>
        <AppWidgetSummary
          title="Total Mobile User"
          total={1352831}
          color="info"
        />
      </Grid>

      <Grid xs={12} sm={6} md={3}>
        <AppWidgetSummary
          title="Total Website User"
          total={1723315}
          color="warning"
        />
      </Grid>
      <br />

     
          <div className="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
  <div>
    <h2 className="text-lg font-semibold">Employees</h2>
  </div>
  <div>
    <button
      type="button"
      className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Add new employee 
    </button>
  </div>Name
</div> 

<section className="mx-auto w-full max-w-7xl px-4 py-4">

<div className="mt-6 flex flex-col">
  <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
      <div className="overflow-hidden border border-gray-200 md:rounded-lg">

        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
              >
                <span>User Id</span>
              </th>
              <th
                scope="col"
                className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
              >
               Address
              </th>
              <th scope="col" className="relative px-4 py-3.5">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">

      {
        data && data.map((ab)=>(
          <tr>
              <td className="whitespace-nowrap px-4 py-4">
                    <div className="text-sm font-medium text-gray-900">
                     {ab.userid}
                    </div>
              </td>
              <td className="whitespace-nowrap px-12 py-4">
                <div className="text-sm text-gray-900 ">{ab.fullname}</div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">
                <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                  Active
                </span>
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                {ab.address}
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                <a href="#" className="text-gray-700">
                  Edit
                </a>
              </td>
          </tr>
              )
      
          )
      }
          </tbody>
        </table>

      </div>
    </div>
  </div>
</div>

</section>
<div className="flex items-center justify-center pt-6">
  <a
    href="#"
    className="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900"
  >
    <span className="hidden lg:block">← Previous</span>
    <span className="block lg:hidden">←</span>
  </a>
  <a
    href="#"
    className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
  >
    1
  </a>
  <a
    href="#"
    className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
  >
    2
  </a>
  <a
    href="#"
    className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
  >
    3
  </a>
  <a
    href="#"
    className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
  >
    4
  </a>
  <a href="#" className="mx-2 text-sm font-semibold text-gray-900">
    <span className="hidden lg:block">Next →</span>
    <span className="block lg:hidden">→</span>
  </a>
</div> 


      

      </Grid>
  </Container>
  );
}

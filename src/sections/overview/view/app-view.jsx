import axios from 'axios';
import { useState, useEffect } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import AppWidgetSummary from '../app-widget-summary';
// import { toDate } from 'date-fns';


export default function AppView() {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');


  useEffect(() =>{
      const fetchData = async () =>{
        try{
          const response = await axios.get("https://remitwise-server.vercel.app/api");
          setData(response.data);  // for short using this method   => slice(0,53)
          setFilteredData(response.data);
        }catch(error){
          console.log("Error fetching data:", error);
        }
      }
      fetchData();
    },[]);

    const handleSearch = (event) => {
      setSearchTerm(event.target.value.toLowerCase());

      // Filter by fullname and userid
      setFilteredData(data.filter(item => 
          item.fullname.toLowerCase().includes(searchTerm) ||
          item.userid.toLowerCase().includes(searchTerm)
      ));
  };

  const handleFilter = () => {
    const filtered = data.filter(
      (item) =>
        (!startDate || item.datetimecreated >= startDate) &&
        (!endDate || item.datetimecreated <= endDate)
    );
    setFilteredData(filtered);
  };
 
  return (
    <Container maxWidth="xl">
      <Typography variant="h3" sx={{ mb: 5 }}>
        Dashboard(Inward Transaction)
      </Typography>
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Merchant Account"
            total={1351}
            color='success'
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Virtual Account"
            total={1352831}
            color="info"
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Invoice Report"
            total={1723315}
            color="warning"
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Inward Transaction"
            total={234}
            color="error"
          />
        </Grid>
            <div className="bg-dashboard-header space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0  ">


          <div className='flex justify-start pt-3 pb-3   bg-slate-100 h-auto w-full mt-0'>
            <div className=' flex w-4/5   bg-search-container  justify-between '>
            <input 
                    type='text' 
                    placeholder='Search by Fullname or UserId' 
                    className='form-control px-3   w-80 h-10 border ml-5 rounded-lg shadow-lg text-black ' 
                    onChange={handleSearch} 
                /> 
 
          <div className="bg-filter-container h-10 w-auto ">
            <div className="inline-block  ">
              <p className='inline-block mr-3' >Start Date:</p>
              <input
                type="date"
                id='startdate'
                className="form-control pl-4 h-10  border rounded-lg shadow-lg mr-5"
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="inline-block">
              <p className='inline-block mr-3' >End Date:</p>
              <input
                type="date"
                id='enddate'
                className="form-control pl-4 h-10 border  rounded-lg shadow-lg"
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <div className="inline-block ml-5">
              <button
                onClick={handleFilter}
                type='submit'
                className="form-control w-auto h-10 bg-yellow-300 text-light pt-2 pb-2 pl-3 pr-3 text-center rounded-md font-semibold text-lg"
              >
                Filter
              </button>
            </div>
            </div> 

            </div>
            </div>

<section className=" mx-auto w-full max-w-7xl px-4 py-4">
  
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
                  Fullname
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                 Address
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                 Password
                </th> 
                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                 Mobile No.
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                 Date & Time
                </th>
             
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">

        {filteredData && filteredData.map((ab)=>(
            <tr>
                <td className="whitespace-nowrap px-4 py-4">
                      <div className="text-sm font-medium text-gray-900">
                       {ab.userid}
                      </div>
                </td>
                <td className="whitespace-nowrap px-12 py-4">
                  <div className="text-sm text-gray-900 ">{ab.fullname}</div>
                </td>
              

                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                  {ab.email}
                </td>

                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                  {ab.address}
                </td>

                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                  {ab.userpassword}
                </td>

                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                  {ab.mobilenumber}
                </td>

                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                  {ab.datetimecreated}
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
   </div> 
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


import { Divider } from "@nextui-org/react";
import { CircleHelp, Layers, Package, UsersRound } from "lucide-react";
import React from "react";
import GeneralTable from "../../components/common/table";
import LineChart from "../../components/charts/lineChart";
// import { google } from "googleapis";


const Dashboard = () => {
  
  
//   const analytics = google.analytics('v3');
//   async function getReport() {
//   const auth = new google.auth.GoogleAuth({
//     keyFile: '../../../credential.json',
//     scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
//   });

//   const analytics = google.analytics({
//     version: 'v3',
//     auth,
//   });

//   const res = await analytics.data.ga.get({
//     'ids': 'ga:YOUR_VIEW_ID',
//     'start-date': '30daysAgo',
//     'end-date': 'today',
//     'metrics': 'ga:sessions,ga:pageviews',
//     'dimensions': 'ga:pagePath',
//   });

//   console.log(res.data);
// }

// getReport();


  const coulumns = [
    {
      key: "sno",
      label: "Sno",
    },
    {
      key: "name",
      label: "Name",
    },
    {
      key: "desc",
      label: "Description",
    },
    {
      key: "category",
      label: "Category",
    },
    {
      key: "price",
      label: "Price",
    },
    {
      key: "discount",
      label: "Discount",
    },
    
  ];
  const rows = [
    {
      key: 0,
      sno: "01",
      name: "shoes",
      category: "footware",
      desc: "Loren ipsm of that the way he finds enrishment...",
      price: "900",
      discount: "10%",
     
    },
    {
      key: 1,
      sno: "02",
      name: "shoes",
      category: "footware",
      desc: "Loren ipsm of that the way he finds enrishment...",
      price: "900",
      discount: "10%",
      
    },
    {
      key: 2,
      sno: "03",
      name: "shoes",
      category: "footware",
      desc: "Loren ipsm of that the way he finds enrishment...",
      price: "900",
      discount: "10%",
      
    },
    {
      key: 3,
      sno: "04",
      name: "shoes",
      category: "footware",
      desc: "Loren ipsm of that the way he finds enrishment...",
      price: "900",
      discount: "10%",
     
    },
    {
      key: 4,
      sno: "05",
      name: "shoes",
      category: "footware",
      desc: "Loren ipsm of that the way he finds enrishment...",
      price: "900",
      discount: "10%",
      
    },
    {
      key: 5,
      sno: "06",
      name: "shoes",
      category: "footware",
      desc: "Loren ipsm of that the way he finds enrishment...",
      price: "900",
      discount: "10%",
      
    },
    {
      key: 6,
      sno: "07",
      name: "shoes",
      category: "footware",
      desc: "Loren ipsm of that the way he finds enrishment...",
      price: "900",
      discount: "10%",
      
    },
    {
      key: 7,
      sno: "08",
      name: "shoes",
      category: "footware",
      desc: "Loren ipsm of that the way he finds enrishment...",
      price: "900",
      discount: "10%",
      
    },
    
  
  ];
  return (
    <div className="mb-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-5">
        <div className="bg-orange-400/30 border rounded-xl border-orange-500 p-2 py-4 flex items-center gap-2">
          <Package size={60} />
          <div>
            <p className="text-slate-300 font-bold">Total Products</p>
            <p className="text-3xl text-white">86</p>
          </div>
        </div>
        <div className="bg-orange-400/30 border rounded-xl border-orange-500 p-2 py-4 flex items-center gap-2">
          <Layers size={50} />
          <div>
            <p className="text-slate-300 font-bold">Total Categories</p>
            <p className="text-3xl text-white">86</p>
          </div>
        </div>
        <div className="bg-orange-400/30 border rounded-xl border-orange-500 p-2 py-4 flex items-center gap-2">
          <CircleHelp size={50} />
          <div>
            <p className="text-slate-300 font-bold">Total FAQs</p>
            <p className="text-3xl text-white">16</p>
          </div>
        </div>
        <div className="bg-orange-400/30 border rounded-xl border-orange-500 p-2 py-4 flex items-center gap-2">
          <UsersRound size={50} />
          <div>
            <p className="text-slate-300 font-bold">Total Users</p>
            <p className="text-3xl text-white">16</p>
          </div>
        </div>
      </div>
      <LineChart/>
      {/* <GeneralTable columns={coulumns} rows={rows} /> */}
    </div>
  );
};

export default Dashboard;

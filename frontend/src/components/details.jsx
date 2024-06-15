import React from "react";
// import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary components with Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);
export const Details = () => {
    const data = {
        
        datasets: [
          {
            label: 'Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            enabled: true,
          },
        },
      };
  return (
    <>
      <div className="text-white flex-row  md:flex justify-between mt-10   ">
        <div className=" border px-5 w-[30%] bg-[#b9c1b6] rounded-xl ml-4 pt-5 ">
          <div className="flex md:flex justify-between items-center w-full text-black ">
            <div>
              <h1 className="text-xl font-[500]">Summary</h1>
            </div>
            <div className="text-3xl">...</div>
          </div>
          <div className="flex justify-between bg-[#d2e1f9] rounded-full text-black px-4 py-3 mt-2 ">
            <div className="flex justify-start gap-2">
              <div>
                <p>o</p>
              </div>
              <div>
                <p className="font-[500]">Overview</p>
              </div>
            </div>
            <div>
              <p className="font-[500] bg-[#e4edfb] px-3 rounded-full">1,552</p>
            </div>
          </div>

          <div className="flex justify-between items-center w-full text-black "></div>
          <div className="flex justify-between bg-[#d2f2f9] rounded-full text-black px-4 py-3 mt-5 ">
            <div className="flex justify-start gap-2">
              <div>
                <p>o</p>
              </div>
              <div>
                <p className="font-[500]">Campaigns</p>
              </div>
            </div>
            <div>
              <p className="font-[500] bg-[#d2f9e8] px-3 rounded-full">1,552</p>
            </div>
          </div>

          <div className="flex justify-between items-center w-full text-black "></div>
          <div className="flex justify-between bg-[#d2f9e8] rounded-full text-black px-4 py-3 mt-5 ">
            <div className="flex justify-start gap-2">
              <div>
                <p>o</p>
              </div>
              <div>
                <p className="font-[500]">Ad groups</p>
              </div>
            </div>
            <div>
              <p className="font-[500] bg-[#e4edfb] px-3 rounded-full">1,552</p>
            </div>
          </div>

          <div className="flex justify-between items-center w-full text-black "></div>
          <div className="flex justify-between bg-[#f7f9d2] rounded-full text-black px-4 py-3 mt-5 ">
            <div className="flex justify-start gap-2">
              <div>
                <p>o</p>
              </div>
              <div>
                <p className="font-[500]">Keywords</p>
              </div>
            </div>
            <div>
              <p className="font-[500] bg-[#e4edfb] px-3 rounded-full">1,552</p>
            </div>
          </div>
        </div>

        <div className="border p-8 w-[30%] bg-[#b0d2c1] rounded-xl ml-4">
          <div>
            <div className="flex justify-between text-black">
              <h1 className="text-xl font-[500]">Top five products by spend</h1>
              <p>...</p>
            </div>
            <div className="text-center mt-5 text-[#6b8075]">
              <p>Total Score</p>
              <h1 className="text-black font-[500] text-5xl">2,985</h1>
            </div>
          </div>
          <div className="w-2/5 mx-auto mt-5 ">
          <Doughnut data={data}  />
      </div>
        </div>

        <div className="border p-8 w-[30%] bg-[#bab6c1] rounded-xl ml-4">
          <div>
            <div className="flex justify-between text-black">
              <h1 className="text-xl font-[500]">Highest ACoS campagins</h1>
              <p>...</p>
            </div>
            <div className=" mt-5 text-[#7a787e]  w-[100%]">
              <table className="  text-left p-1 ">
                <tr>
                  <th className="px-1">campagins</th>
                  <th className="px-1">Spends</th>
                  <th className="px-1">Sales</th>
                  <th className="px-1">ACoS</th>
                </tr> <br />
                <tr className="mb-5" >
                  <td className="">
                    <span className=" rounded-full px-2 py-1 text-[12px] text-black bg-[#d2e1f9]">
                      A
                    </span>{" "}
                    <span className="text-black font-[500]">Bo8NY9N3MT</span>
                  </td>

                  <td className="px-2">$30.25</td>
                  <td className="px-1">$149.85</td>
                  <td className="text-red-500 font-[400] px-1 text-xl">
                    $149.85
                  </td>
                </tr> 
                <tr className="mb-10 ">
                  <td>
                    <span className="border rounded-full px-2 py-1 text-[12px] text-black bg-[#d2e1f9]">
                      A
                    </span>{" "}
                    <span className="text-black font-[500]">Bo8NY9N3MT</span>
                  </td>

                  <td>$30.25</td>
                  <td>$149.85</td>
                  <td className="text-black font-[500] text-xl">$149.85</td>
                </tr>
                <tr className=" mb-5 ">
                  <td className="py-1">
                    <span className="border rounded-full px-2 py-1 text-[12px] text-black bg-[#d2e1f9]">
                      A
                    </span>{" "}
                    <span className="text-black font-[500]">Bo8NY9N3MT</span>
                  </td>

                  <td className="px-2">$30.25</td>
                  <td className="p-1">$149.85</td>
                  <td className="text-black font-[500] text-xl">$149.85</td>
                </tr>

                <tr className="font-[400] ">
                  <td className="py-1">
                    <span className="border rounded-full px-2 py-1 text-[10px] text-black bg-[#d2e1f9] p-1">
                      M
                    </span>{" "}
                    <span className="text-black font-[500]">Bo8NY9N3MT</span>
                  </td>

                  <td className="px-2">$30.25</td>
                  <td className="p-1">$149.85</td>
                  <td className="text-black font-[500] text-xl p-1">
                    $149.85
                  </td>
                </tr>

                <tr className="font-[400] mt-[50px] ">
                  <td>
                    <span className="border rounded-full px-2 py-1 text-[10px] text-black bg-[#d2e1f9]">
                      M
                    </span>{" "}
                    <span className="text-black font-[500]">Bo8NY9N3MT</span>
                  </td>

                  <td className="px-2">$30.25</td>
                  <td>$149.85</td>
                  <td className="text-black font-[500] text-xl">$149.85</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

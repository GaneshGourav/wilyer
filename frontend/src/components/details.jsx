import React from "react";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
export const Details = () => {
  const data = {
    datasets: [
      {
        label: "Votes",
        data: [700, 500, 400, 300, 200],
        backgroundColor: [
          "rgb(100,182,153)",
          "rgb(110,201,151)",
          "rgb(180,234,151)",
          "rgb(255,194,142)",
          "rgb(255,215,142)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    legend: {
      display: false,
      position: "bottom",
    },
    cutoutPercentage: 100,
    rotation: -90,
    circumference: 180,
  };
  return (
    <>
      <div className="text-white flex-row  md:flex justify-between mt-10 w-[91%]  ">
        {/* First item block */}
        <div className=" border pb-3 px-5 md:w-[30%] bg-[#b9c1b6] rounded-[35px] ml-4  ">
          <div className="text-center leading-[6px] text-[#8c9e95] text-3xl font-[500px] ">
            <p>...</p>
            <p>...</p>
          </div>

          <div className="flex md:flex justify-between items-center pt-5 w-full text-black ">
            <div>
              <h1 className="text-xl font-[700]">Summary</h1>
            </div>
            <div>
              <h1 className="text-[#6c6c6c] text-[14px]">ooo</h1>
            </div>
          </div>
          <div className="flex justify-between bg-[#d2e1f9] rounded-full text-black px-4 py-3 mt-5 ">
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
          <div className="flex justify-between bg-[#d2f2f9] rounded-full text-black px-4 py-3 mt-2 ">
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
          <div className="flex justify-between bg-[#d2f9e8] rounded-full text-black px-4 py-3 mt-2 ">
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
          <div className="flex justify-between bg-[#f7f9d2] rounded-full text-black px-4 py-3 mt-2 ">
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

        {/* Second item block  */}

        <div className="border px-5 w-full mt-5 md:mt-0 md:w-[30%] bg-[#b0d2c1] rounded-[35px] ml-4 md:relative">
          <div className="text-center leading-[6px] text-[#8c9e95] text-3xl font-[500px] ">
            <p>...</p>
            <p>...</p>
          </div>
          <div>
            <div className="flex justify-between text-black pt-5">
              <h1 className="text-xl font-[700]">Top 5 products by spend</h1>
              <div>
                <h1 className="text-[#6c6c6c] text-[14px]">ooo</h1>
              </div>
            </div>
            <div className="text-center mt-5 text-[#6b8075]">
              <p>Total Score</p>
              <h1 className="text-black font-[500] text-5xl">2,985</h1>
            </div>
          </div>
          <div className=" md:w-[300px] md:h-0 mx-auto md:absolute top-[78px] left-14  ">
            <Doughnut data={data} options={options} />
            <div className="bg-[#d2f2c0] md:absolute top-[170px] left-[90px] text-center px-3 rounded-[15px]">
              <p className="text-black font-[600]">$1,815.67</p>
              <h1 className="text-[#6f7f65] font-[700]">BO7MCGRV7M</h1>
            </div>
          </div>
        </div>

        {/* Third item block  */}

        <div className="border px-8 w-full mt-3 md:mt-0 md:w-[30%] bg-[#bab6c1] rounded-[35px] ml-4">
          <div className="text-center leading-[6px] text-[#8c9e95] text-3xl font-[500px] ">
            <p>...</p>
            <p>...</p>
          </div>
          <div>
            <div className="flex justify-between text-black pt-5">
              <h1 className="text-xl font-[700]">Highest ACoS campagins</h1>
              <div>
                <h1 className="text-[#6c6c6c] text-[14px]">ooo</h1>
              </div>
            </div>
            <div className=" mt-5 text-[#7a787e]  w-[100%]">
              <table className="  text-left p-1 ">
                <tr>
                  <th className="px-1">campagins</th>
                  <th className="px-1">Spends</th>
                  <th className="px-1">Sales</th>
                  <th className="px-1">ACoS</th>
                </tr>{" "}
                <br />
                <tr className="mb-5">
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
                  <td className="text-black font-[500] text-xl p-1">$149.85</td>
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

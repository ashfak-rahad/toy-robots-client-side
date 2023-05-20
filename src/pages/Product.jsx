import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Product = () => {
    
  return (
    <div>
      <div>
        <Tabs>
          <TabList>
            <Tab>Toy Robots</Tab>
            <Tab>Fighter Robots</Tab>
            <Tab>Mechanical Robots</Tab>
          </TabList>

          <TabPanel>
            <div>
              <div className="max-w-[1240px] grid md:grid-cols-3 m-auto p-4 px-4 py-12 ">
                <div className="border shadow-lg rounded-lg hover:scale-105 duration-300">
                  <img
                    className="w-full h-[200px] object-cover rounded-t-lg "
                    src="https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                  <div className="px-2 py-4">
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>

                    <div>
                      <button className="btn btn-primary">Views Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <div>
              <div className="max-w-[1240px] grid md:grid-cols-3 m-auto p-4 px-4 py-12 ">
                <div className="border shadow-lg rounded-lg hover:scale-105 duration-300">
                  <img
                    className="w-full h-[200px] object-cover rounded-t-lg "
                    src="https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                  <div className="px-2 py-4">
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>

                    <div>
                      <button className="btn btn-primary">Views Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <div>
              <div className="max-w-[1240px] grid md:grid-cols-3 m-auto p-4 px-4 py-12 ">
                <div className="border shadow-lg rounded-lg hover:scale-105 duration-300">
                  <img
                    className="w-full h-[200px] object-cover rounded-t-lg "
                    src="https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                  <div className="px-2 py-4">
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>

                    <div>
                      <button className="btn btn-primary">Views Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Product;

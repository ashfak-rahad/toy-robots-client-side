import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Card from "../components/card";
const Product = () => {
  const [activeTapData, setActiveTapData] = useState({});

  const getSubCategoriesData = (category) => {
    fetch(` https://toy-robots.vercel.app/sub-category?category=${category}`)
      .then((res) => res.json())
      .then((data) => setActiveTapData(data));
  };

  useEffect(() => {
    fetch(
      "https://toy-robots.vercel.app/sub-category?category=Giant_Robots"
    )
      .then((res) => res.json())
      .then((data) => setActiveTapData(data));
  }, []);

  return (
    <section className="mt-10">
      <Tabs>
        <TabList>
          <Tab onClick={() => getSubCategoriesData("Giant_Robots")}>
          Giant Robots
          </Tab>
          <Tab onClick={() => getSubCategoriesData("Fighter_Robots")}>
          Fighter Robots
          </Tab>
          <Tab onClick={() => getSubCategoriesData("Mechanical_Robots")}>
          Mechanical Robots
          </Tab>
        </TabList>

        <TabPanel>
          <section className="grid md:grid-cols-2 gap-5">
            {activeTapData.category_name === "Giant_Robots" &&
              activeTapData.subToy.map((subCategory) => (
                <Card key={subCategory._id} subCategory={subCategory} />
              ))}
          </section>
        </TabPanel>
        <TabPanel>
          <section className="grid md:grid-cols-2 gap-5">
            {activeTapData.category_name === "Fighter_Robots" &&
              activeTapData.subToy.map((subCategory) => (
                <Card key={subCategory._id} subCategory={subCategory} />
              ))}
          </section>
        </TabPanel>
        <TabPanel>
          <section className="grid md:grid-cols-2 gap-5">
            {activeTapData.category_name === "Mechanical_Robots" &&
              activeTapData.subToy.map((subCategory) => (
                <Card key={subCategory._id} subCategory={subCategory} />
              ))}
          </section>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default Product;

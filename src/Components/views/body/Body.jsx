import "./Body.scss";
import { TriangleIcon, BarIcon } from "/src/Components/icons";
import { useEffect, useState } from "react";
import { formatDate } from "../../utils/Resources";
import Card from "../../ui/card/Card";

const END_POINT_DATA =
  "https://run.mocky.io/v3/25c6bdb6-6377-41f9-907d-c6549ce9e4f7";
export default function Body() {
  const [values, setValues] = useState({
    pageActive: "latest",
    latestData: [],
    popularData: [],
  });

  useEffect(() => {
    fetch(END_POINT_DATA)
      .then(async (res) => await res.json())
      .then((data) => {
        console.log("data :>> ", data);
        // Filter the data based on the value of 'isPopular'
        const popularItems = data.filter((item) => item.isPopular);
        const notPopularItems = data.filter((item) => !item.isPopular);
        const sortedNotPopularItems = notPopularItems.sort((a, b) => {
          return new Date(b.publicationTime) - new Date(a.publicationTime);
        });

        setValues((oldValues) => ({
          ...oldValues,
          latestData: sortedNotPopularItems,
          popularData: popularItems,
        }));
      })
      .catch((error) => console.log("error :>> ", error));
  }, []);

  function handlerOnClickPage(page) {
    setValues((oldValues) => ({
      ...oldValues,
      pageActive: page,
    }));
  }

  const { pageActive, latestData, popularData } = values;
  console.log("popularData :>> ", popularData);
  console.log("latestData :>> ", latestData);
  console.log('pageActive :>> ', pageActive);
  return (
    <section id="main-body">
      <div className="body-container">
        <div className="container-first-section-body">
          <div className="container-title">
            <div>
              <span
                className={`latest ${pageActive === "latest" && "isActive"}`}
                onClick={() => handlerOnClickPage("latest")}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0} 
              >
                Latest
              </span>
              <span
                className={`popular ${pageActive === "popular" && "isActive"}`}
                onClick={() => handlerOnClickPage("popular")}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
              >
                Popular
              </span>
            </div>
            <div className="container-filter">
              <span className="title-filter">Show:</span>
              <span className="option-filter">
                All
                <TriangleIcon height={3} width={8} color="#000" />
              </span>
            </div>
          </div>
          {pageActive === "latest"
            ? latestData.map((data) => {
                return (
                  <Card
                    key={data.id}
                    feed={data.feed}
                    subFeed={data.subFeed}
                    title={data.title}
                    content={data.content}
                    imageUrl={data?.imageUrl}
                    imageHeight="295px"
                    imageWidth="642px"
                    date={formatDate(data.publicationTime)}
                    author={data.author}
                  />
                );
              })
            : popularData.map((data) => {
                return (
                  <Card
                    key={data.id}
                    feed={data.feed}
                    subFeed={data.subFeed}
                    title={data.title}
                    content={data.content}
                    imageURL={data?.imageURL}
                    imageHeight="295px"
                    imageWidth="642px"
                    date={formatDate(data.publicationTime)}
                    author={data.author}
                  />
                );
              })}
        </div>
        <div className="container-second-section-body">
          <div className="container-rectangle">
              <BarIcon color='#fff' width={327} height={10} viewBox='0 0 327 10'/>
              <BarIcon color='#fff' width={195} height={10} viewBox='0 0 195 10'/>
          </div>
          <div className="container-second-rectangle">
              <BarIcon color='#304C70' width={109} height={10} viewBox='0 0 109 10'/>
              <div className={`circle`}/>
          </div>
        </div>
      </div>
    </section>
  );
}

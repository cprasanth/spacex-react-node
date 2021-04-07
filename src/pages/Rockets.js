import { useState, useEffect } from "react";
import axios from "axios";

import Section from "../layout/section";
import Wrapper from "../layout/wrapper";
import LaunchCard from "../components/lauch-card";
import Grid from "../layout/grid";

const Rockets = () => {
  const [data, setData] = useState({ rockets: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/rockets");
      setData({ rockets: result.data });
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Section>
      {loading && <div>loading....</div>}

      {!loading && (
        <Wrapper>
          <Grid>
            {data.rockets.map((item, index) => (
              <LaunchCard
                key={index.toString()}
                image={item.image}
                title={item.name}
                description={item.description}
              />
            ))}
          </Grid>
        </Wrapper>
      )}
    </Section>
  );
};

export default Rockets;

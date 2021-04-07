import { useState, useEffect } from "react";
import axios from "axios";

import Section from "../layout/section";
import Wrapper from "../layout/wrapper";
import LaunchCard from "../components/lauch-card";
import Grid from "../layout/grid";

const Launches = () => {
  const [data, setData] = useState({ launches: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/launches");
      setData({ launches: result.data });
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
            {data.launches.map((item, index) => (
              <LaunchCard
                key={index.toString()}
                image={item.links.patch.small}
                title={item.name}
                description={item.details}
              />
            ))}
          </Grid>
        </Wrapper>
      )}
    </Section>
  );
};

export default Launches;

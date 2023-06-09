import { useState, useEffect } from "react";

import { getImages } from "../services/api";

const useMarsImages = (date) => {
  const [marsImages, setMarsImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (date !== "") {
        setLoading(true);
        const images = await getImages(date);
        setMarsImages(images ?? []);
        setLoading(false);
      }
    })();
  }, [date]);

  return [marsImages, loading];
};

export default useMarsImages;
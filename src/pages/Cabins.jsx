import { useEffect } from "react";
import { getCabins } from "../services/apiCabins";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";


function Cabins() {
  useEffect(() => {
    async function getData() {
      const data = await getCabins();
      console.log(JSON.stringify(data));
    }
    getData();
  }, []);
  

  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>filter/sort</p>
    </Row>
    <CabinTable />
    </>
  );
}

export default Cabins;

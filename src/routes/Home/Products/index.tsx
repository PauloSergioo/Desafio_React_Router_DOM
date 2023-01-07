import { Outlet } from "react-router-dom";
import NavCard from "../../../components/NavCard";

export default function Products() {
  return (
    <>
      <NavCard />
      <Outlet/>
    </>
  );
}

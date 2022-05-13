import $ from "./style.module.scss";

type Prop = {
  children: JSX.Element[];
};

const Layout = ({ children }: Prop) => {
  return <main className={$.main}>{children}</main>;
};

export default Layout;

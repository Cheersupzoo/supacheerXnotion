import logo from "../../assets/1_zpng.png";

interface MyProps {
  className?: string | undefined;
}

export default function Logo({ className }: MyProps) {
  return <img className={className} src={logo.src} />;
}

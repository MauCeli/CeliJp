import AppButton from "/components/AppButton";
import Link from "next/link";
import Progress from "/components/Icons/Progress";
import AppLayoutMenu from "../../components/AppLayoutMenu";
export default function Horarios() {
  return (
    <>
      <AppLayoutMenu>
        <AppButton>
          <Link href="/">
            <a>始める!</a>
          </Link>
          <Progress width={24} height={24} />
        </AppButton>
      </AppLayoutMenu>
    </>
  );
}

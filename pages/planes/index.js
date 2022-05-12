import AppButton from "/components/AppButton";
import Link from "next/link";
import Progress from "/components/Icons/Progress";
import AppMenu from "/components/AppMenu";
import AppLayoutMenu from "../../components/AppLayoutMenu";
import AppCardContainer from "../../components/AppCardContainer";
import AppCard from "../../components/AppCard";
import AppCardDescription from "../../components/AppCardDescription";
export default function Planes() {
  return (
    <>

      <AppLayoutMenu>
        <AppMenu>
          <AppCard>
            <AppCardContainer> contenido </AppCardContainer>
            <AppCardDescription>description</AppCardDescription>
            <AppButton>plan 1</AppButton>
          </AppCard>

          <AppCard>
            <AppCardContainer> contenido </AppCardContainer>
            <AppCardDescription>description</AppCardDescription>
            <AppButton>plan 2</AppButton>
          </AppCard>

          <AppCard>
            <AppCardContainer> contenido </AppCardContainer>
            <AppCardDescription>description</AppCardDescription>
            <AppButton>plan 3</AppButton>
          </AppCard>
        </AppMenu>
      </AppLayoutMenu>
    </>
  );
}

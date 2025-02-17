import {BespokeManager} from "@datawheel/bespoke/cms";
import {storeWrapper} from "@datawheel/bespoke/store";
import {BespokeManagerServerSideProps} from "@datawheel/bespoke/server";

export const getServerSideProps = BespokeManagerServerSideProps();

const BespokePage = storeWrapper.withRedux(BespokeManager({
  title: "DW CMS",
  profilePrefix: "/report",
  notifications: {
    position: "bottom-right",
  },
}));

BespokePage.hideNav = true;
BespokePage.hideFooter = true;

export default BespokePage;

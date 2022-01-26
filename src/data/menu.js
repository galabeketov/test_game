import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HomeMini } from "@mui/icons-material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import SchoolIcon from "@mui/icons-material/School";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FunctionsIcon from "@mui/icons-material/Functions";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import DashboardIcon from "@mui/icons-material/Dashboard";

const menu = [
  {
    icon: <AccountBalanceIcon />,
    text: "Maktab",
  },
  {
    icon: <CoPresentIcon />,
    text: "O'qituvchilar",
  },
  {
    icon: <SchoolIcon />,
    text: "O'quvchilar",
  },
  {
    icon: <MeetingRoomIcon />,
    text: "Sinflar",
  },
  {
    icon: <ListAltIcon />,
    text: "Jurnal",
  },
  {
    icon: <FunctionsIcon />,
    text: "Fanlar",
  },
  {
    icon: <HowToRegIcon />,
    text: "Xonalar",
  },
  {
    icon: <DashboardIcon />,
    text: "Dars jadvali",
  },
];

export default menu;

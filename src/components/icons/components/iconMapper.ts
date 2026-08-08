import AlertTriangle from "./AlertTriangle";
import ArrowLeft from "./ArrowLeft";
import Bell from "./Bell";
import Biometric from "./Biometric";
import BoxOff from "./BoxOff";
import Briefcase from "./Briefcase";
import Building from "./Building";
import Camera from "./Camera";
import Category from "./Category";
import Check from "./Check";
import Chevron from "./Chevron";
import ChevronDown from "./ChevronDown";
import ChevronUp from "./ChevronUp";
import CircleCheck from "./CircleCheck";
import Close from "./Close";
import CreditCard from "./CreditCard";
import Discount from "./Discount";
import DotsVertical from "./DotsVertical";
import Download from "./Download";
import Eye from "./Eye";
import EyeOff from "./EyeOff";
import FileText from "./FileText";
import Heart from "./Heart";
import HeartFilled from "./HeartFilled";
import Help from "./Help";
import Home from "./Home";
import ImageOff from "./ImageOff";
import InfoCircle from "./InfoCircle";
import Layers from "./Layers";
import Loader from "./Loader";
import Lock from "./Lock";
import Logout from "./Logout";
import Mail from "./Mail";
import MailOpened from "./MailOpened";
import MapPin from "./MapPin";
import MapPinOther from "./MapPinOther";
import Palette from "./Palette";
import Search from "./Search";
import Shield from "./Shield";
import ShieldX from "./ShieldX";
import ShopingCart from "./ShopingCart";
import ShoppingBag from "./ShoppingBag";
import Star from "./Star";
import Truck from "./Truck";
import User from "./User";
import WifiOff from "./WifiOff";
import World from "./World";

const icons = {
  eye: Eye,
  "eye-off": EyeOff,
  lock: Lock,
  user: User,
  chevron: Chevron,
  "chevron-down": ChevronDown,
  "chevron-up": ChevronUp,
  mail: Mail,
  "mail-opened": MailOpened,
  close: Close,
  "map-pin": MapPin,
  "map-pin-other": MapPinOther,
  "brief-case": Briefcase,
  home: Home,
  building: Building,
  camera: Camera,
  check: Check,
  "circle-check": CircleCheck,
  "credit-card": CreditCard,
  "shopping-cart": ShopingCart,
  "shopping-bag": ShoppingBag,
  truck: Truck,
  "arrow-left": ArrowLeft,
  search: Search,
  download: Download,
  bell: Bell,
  heart: Heart,
  "heart-filled": HeartFilled,
  category: Category,
  "alert-triangle": AlertTriangle,
  "info-circle": InfoCircle,
  star: Star,
  shield: Shield,
  "shield-x": ShieldX,
  world: World,
  palette: Palette,
  "file-text": FileText,
  help: Help,
  logout: Logout,
  "dots-vertical": DotsVertical,
  layers: Layers,
  discount: Discount,
  biometric: Biometric,
  loader: Loader,
  "wifi-off": WifiOff,
  "box-off": BoxOff,
  "image-off": ImageOff,
} as const;

export default icons;

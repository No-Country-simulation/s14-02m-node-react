import FacebookIcon from "@/components/Footer/icons/FacebookIcon";
import GithubIcon from "@/components/Footer/icons/GithubIcon";
import InstagramIcon from "@/components/Footer/icons/InstagramIcon";
import LinkedinIcon from "@/components/Footer/icons/LinkedinIcon";
import TwitterIcon from "@/components/Footer/icons/TwitterIcon";

interface footerItem {
	icon: (props: any) => JSX.Element;
	label: string;
	link: string;
	isValid: boolean;
}

const icons: footerItem[] = [
	{
		icon: (props) => (
			<FacebookIcon
				fillColor={props.fillColor}
				width={props.width}
				height={props.height}
			/>
		),
		label: "Facebook",
		link: "",
		isValid: true,
	},
	{
		icon: (props) => (
			<InstagramIcon
				fillColor={props.fillColor}
				width={props.width}
				height={props.height}
			/>
		),
		label: "Instagram",
		link: "",
		isValid: true,
	},
	{
		icon: (props) => (
			<TwitterIcon
				fillColor={props.fillColor}
				width={props.width}
				height={props.height}
			/>
		),
		label: "Twitter",
		link: "",
		isValid: true,
	},
	{
		icon: (props) => (
			<GithubIcon
				fillColor={props.fillColor}
				width={props.width}
				height={props.height}
			/>
		),
		label: "Github",
		link: "https://github.com/No-Country/s14-02m-node-react",
		isValid: true,
	},
	{
		icon: (props) => (
			<LinkedinIcon
				fillColor={props.fillColor}
				width={props.width}
				height={props.height}
			/>
		),
		label: "LinkedIn",
		link: "",
		isValid: true,
	},
];
export default icons;
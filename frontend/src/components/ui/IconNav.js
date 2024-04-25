export function IconNav(props) {
	return (
		<a href="/" className=" items-start flex-col cursor-pointer grow w-[100%] py-1 flex ">
			<div className="flex duration-200 max-w-[100%] items-center flex-row justify-center p-3 rounded-full  hover:bg-greeno/10">
				<div className="items-stretch flex basis-auto flex-col shrink-0 m-0 min-h-0 min-w-0 p-0 relative z-0">
					<img
						className="invert w-7 h-7 max-w-[100%]
			relative align-text-bottom inline-block"
						src={props.src}
						alt={props.alt}
					/>
				</div>
				<div className=" ml-5 mr-4 break-words max-w-[100%] min-w-0 text-[20px] whitespace-nowrap font-normal leading-6 overflow-x-hidden overflow-y-hidden">
					<span className="min-w-0  break-words   ">{props.title}</span>
				</div>
			</div>
		</a>
	);
}
export default IconNav;

import LeftSidebar from './LeftSidebar';
import Feed from './Feed';
import RightSidebar from './RightSidebar';
const Home = () => {
	return (
		<div className="flex justify-between w-[80%] mx-auto">
			<title>AceCriollo</title>

			<LeftSidebar />
			<Feed />
			<RightSidebar />
		</div>
	);
};
export default Home;

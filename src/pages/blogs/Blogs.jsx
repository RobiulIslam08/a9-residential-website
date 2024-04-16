import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";


const Blogs = () => {
	const location = useLocation()
	console.log(location)
	return (

		<div>
			<Helmet>
                <title>Blogs</title>
            </Helmet>
			<section className="dark:bg-gray-100 dark:text-gray-800 mb-14 lg:mb-20">
				<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
					<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
						<img src="https://i.ibb.co/02PZCbV/single-family-house.jpg" alt="Modern Single-Family Home" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
						<div className="p-6 space-y-2 lg:col-span-5">
							<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Modern Single-Family Home</h3>
							<span className="text-xs dark:text-gray-600">City Center - $500,000</span>
							<p>Discover the pinnacle of modern living in this stunning single-family home located in the heart of the City Center. This property offers a perfect blend of style and comfort with its sleek, contemporary design and spacious interiors.</p>
						</div>
					</a>
					<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
							<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/254Y0Fm/apartment.jpg" />
							<div className="p-6 space-y-2">
								<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Luxury Apartment with Panoramic Views</h3>
								<span className="text-xs dark:text-gray-600">Waterfront District - $3,000/month</span>
								<p>Elevate your lifestyle with this luxurious apartment, located in the exclusive Waterfront District. Featuring modern amenities and breathtaking panoramic views of the city skyline.</p>
							</div>
						</a>
						<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
							<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/hDb0ngW/townhouse-living.jpg" />
							<div className="p-6 space-y-2">
								<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Charming Townhouse in Historic Neighborhood</h3>
								<span className="text-xs dark:text-gray-600">Old Town - $400,000</span>
								<p>Experience the charm and history of Old Town in this beautifully maintained townhouse, infused with classic architectural elements and modern conveniences.</p>
							</div>
						</a>
						<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
							<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/D5BZcc3/senior-living-coummunity.jpg" />
							<div className="p-6 space-y-2">
								<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Senior Living Community - Tranquil Retreat</h3>
								<span className="text-xs dark:text-gray-600">Suburban Oasis - $3,500/month</span>
								<p>Welcome to your new home in our serene senior living community, designed with comfort and companionship in mind. Featuring a vibrant community center and peaceful gardens.</p>
							</div>
						</a>
						<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
							<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/gSCVjzW/vacation-rental.jpg" />
							<div className="p-6 space-y-2">
								<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Spacious Vacation Rental Near the Beach</h3>
								<span className="text-xs dark:text-gray-600">Coastal Paradise - $200/night</span>
								<p>Imagine a relaxing escape in a spacious vacation rental located just steps from the sandy shores. This idyllic property is designed for ultimate relaxation and entertainment.</p>
							</div>
						</a>
						<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
							<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/DMMcN40/b6eb1c34-9c55-4e0a-a4ac-ad8a5a887394.webp" />
							<div className="p-6 space-y-2">
								<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Beachfront Bungalow with Stunning Views</h3>
								<span className="text-xs dark:text-gray-600">Beachfront - $500,000</span>
								<p>This beachfront bungalow offers unobstructed ocean views and private beach access. Perfect for those seeking a serene retreat with the beauty of nature at your doorstep.</p>
							</div>
						</a>

						<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
							<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i.ibb.co/YpTCQ2h/student-housing.jpg" />
							<div className="p-6 space-y-2">
								<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Student Housing - Modern Dormitory</h3>
								<span className="text-xs dark:text-gray-600">University Campus - $800/month</span>
								<p>Step into a world of convenience and community with our modern dormitory facilities, located right on the University Campus. This student housing option offers 500 square feet per room, </p>
							</div>
						</a>

					</div>
					<div className="flex justify-center">
						<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">Load more posts...</button>
					</div>
				</div>
			</section>
		</div>

	);
};

export default Blogs;
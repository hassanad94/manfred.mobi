"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Ticket } from "@phosphor-icons/react";
import { useEffect } from "react";

export default function LandingPage() {
	useEffect(() => {
		console.log(window.location);
		if (window.location.hash !== "#open-app") {
			return;
		}

		// Get the user agent string
		//@ts-expect-error
		const userAgent = navigator.userAgent || navigator.vendor || window?.opera;

		// Check if the user is on an iOS device
		//@ts-expect-error
		const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

		// Check if the user is on an Android device
		const isAndroid = /android/i.test(userAgent);

		// App Store URL for iOS
		const iOSAppStoreLink =
			"itms-apps://itunes.apple.com/us/app/imdb-movies-tv/id342792525";

		// Play Store URL for Android
		const androidPlayStoreLink =
			"https://play.google.com/store/apps/details?id=com.imdb.mobile";

		// Redirect based on the device
		if (isIOS) {
			window.location.href = iOSAppStoreLink;
			return;
		}
		if (isAndroid) {
			window.location.href = androidPlayStoreLink;
			return;
		}
	}, []);

	return (
		<div className="min-h-screen bg-white">
			{/* Header */}
			<header className="sticky top-0 z-10 bg-white shadow-sm">
				<div className="container mx-auto flex h-16 items-center justify-between px-4">
					<div className="flex items-center">
						<h1 className="text-2xl font-bold">Manfred</h1>
					</div>
					<nav className="hidden md:block">
						<ul className="flex space-x-8">
							<li>
								<Link
									href="#features"
									className="text-gray-700 hover:text-primary"
								>
									Features
								</Link>
							</li>
							<li>
								<Link
									href="#how-it-works"
									className="text-gray-700 hover:text-primary"
								>
									How it works
								</Link>
							</li>
							<li>
								<Link
									href="#pricing"
									className="text-gray-700 hover:text-primary"
								>
									Pricing
								</Link>
							</li>
						</ul>
					</nav>
					<div>
						<Link
							href="#download"
							className="rounded-full bg-primary px-6 py-2 text-white hover:bg-red-600"
						>
							Download App
						</Link>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
				<div className="container mx-auto px-4">
					<div className="flex flex-col items-center md:flex-row md:justify-between">
						<div className="mb-10 max-w-lg md:mb-0">
							<h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
								Bike sharing made <span className="text-primary">simple</span>
							</h2>
							<p className="mb-8 text-lg text-gray-600">
								Manfred makes it easy to find, rent, and ride bikes in your
								city. With our app, you're just a few taps away from your next
								ride.
							</p>
							<div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
								<Link
									href="#app-store"
									className="flex items-center justify-center rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
								>
									{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
									<svg
										className="mr-2 h-6 w-6"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path d="M17.5,12.5c0-0.28,0.22-0.5,0.5-0.5s0.5,0.22,0.5,0.5s-0.22,0.5-0.5,0.5S17.5,12.78,17.5,12.5z M16,8v8c0,1.1,0.9,2,2,2h4 c1.1,0,2-0.9,2-2V8c0-1.1-0.9-2-2-2h-4C16.9,6,16,6.9,16,8z M22,8v8h-6V8H22z M2,5l8,5l-8,5V5z M14,5H4v10h10c1.1,0,2-0.9,2-2V7 C16,5.9,15.1,5,14,5z" />
									</svg>
									App Store
								</Link>
								<Link
									href="#play-store"
									className="flex items-center justify-center rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
								>
									{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
									<svg
										className="mr-2 h-6 w-6"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path d="M3.18,20.83c0.44,0.36,0.95,0.57,1.49,0.57c0.55,0,1.06-0.21,1.49-0.57l6.9-5.44l-2.98-3.03L3.18,20.83z M20.77,11.53 c0.5-0.27,0.91-0.64,1.21-1.07c-0.94-0.96-7.03-4.27-7.03-4.27l-3.04,2.99L20.77,11.53z M21.99,10.38 C21.99,10.38,21.99,10.38,21.99,10.38L21.99,10.38C22,10.38,22,10.38,21.99,10.38c0,0.02,0,0.04,0,0.06 c0,0.02-0.01,0.04-0.01,0.06c-0.01,0.08-0.03,0.17-0.06,0.25c-0.03,0.08-0.06,0.15-0.09,0.22c-0.04,0.07-0.08,0.14-0.13,0.2 c-0.05,0.07-0.11,0.13-0.17,0.19c-0.06,0.06-0.12,0.11-0.19,0.16c-0.07,0.05-0.14,0.09-0.21,0.13c-0.13,0.06-0.27,0.1-0.42,0.11 c-0.01,0-0.02,0-0.03,0c-0.01,0-0.02,0-0.03,0h-0.02c-0.01,0-0.02,0-0.03,0c-0.07,0-0.15-0.01-0.22-0.03 c-0.07-0.02-0.14-0.04-0.21-0.06c-0.07-0.03-0.14-0.06-0.2-0.1c-0.07-0.04-0.13-0.08-0.19-0.13l-9.6-5.92l3.02-2.97l7.96,4.97 c0.05,0.02,0.09,0.05,0.13,0.07c0.04,0.02,0.08,0.05,0.12,0.07c0.08,0.06,0.16,0.12,0.23,0.19c0.07,0.07,0.13,0.15,0.18,0.23 c0.05,0.08,0.09,0.17,0.11,0.27c0.03,0.09,0.04,0.19,0.04,0.29c0,0.1-0.01,0.2-0.04,0.29c-0.03,0.09-0.07,0.18-0.11,0.27 c-0.05,0.08-0.11,0.16-0.18,0.23c-0.07,0.07-0.15,0.13-0.23,0.19c-0.04,0.03-0.08,0.05-0.12,0.07c-0.04,0.02-0.08,0.04-0.13,0.07 l-7.96,4.97l-3.02-2.97l9.6-5.92c0.06-0.05,0.12-0.09,0.19-0.13c0.07-0.04,0.13-0.07,0.2-0.1c0.07-0.03,0.14-0.05,0.21-0.06 c0.07-0.01,0.14-0.02,0.22-0.03c0.01,0,0.02,0,0.03,0h0.02c0.01,0,0.02,0,0.03,0c0.01,0,0.02,0,0.03,0 c0.15,0.01,0.29,0.05,0.42,0.11c0.07,0.03,0.14,0.07,0.21,0.13c0.07,0.05,0.13,0.1,0.19,0.16c0.06,0.06,0.12,0.12,0.17,0.19 c0.05,0.06,0.09,0.13,0.13,0.2c0.04,0.07,0.07,0.14,0.09,0.22c0.03,0.08,0.05,0.16,0.06,0.25c0,0.02,0.01,0.04,0.01,0.06 C22,10.34,22,10.36,21.99,10.38z M3.18,3.17C2.74,3.53,2.47,4.04,2.47,4.6v14.8c0,0.56,0.27,1.07,0.71,1.43l6.9-8.44L3.18,3.17z" />
									</svg>
									Google Play
								</Link>
							</div>
						</div>
						<div className="relative h-[600px] w-[300px]">
							<div className="absolute inset-0 rounded-[40px] border-8 border-black bg-black">
								{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
								<div className="absolute left-1/2 top-3 h-6 w-32 -translate-x-1/2 rounded-b-xl bg-black"></div>
								<div className="h-full w-full overflow-hidden rounded-[32px] bg-white p-2">
									<div className="relative h-full w-full overflow-hidden rounded-[28px] bg-white">
										<Image
											src="/app-preview.png?height=600&width=284"
											width={284}
											height={600}
											alt="Manfred App Screenshot"
											className="object-cover"
											priority
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section id="features" className="py-16">
				<div className="container mx-auto px-4">
					<h2 className="mb-12 text-center text-3xl font-bold">
						Why Choose Manfred
					</h2>
					<div className="grid gap-8 md:grid-cols-3">
						<div className="rounded-xl bg-white p-6 shadow-lg">
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
								<MapPin className="h-6 w-6 text-primary" />
							</div>
							<h3 className="mb-2 text-xl font-semibold">Easy Location</h3>
							<p className="text-gray-600">
								Find bikes near you with our interactive map. See available
								bikes in real-time.
							</p>
						</div>
						<div className="rounded-xl bg-white p-6 shadow-lg">
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
								<Clock className="h-6 w-6 text-primary" />
							</div>
							<h3 className="mb-2 text-xl font-semibold">Rental History</h3>
							<p className="text-gray-600">
								Keep track of all your rides with detailed history and
								statistics.
							</p>
						</div>
						<div className="rounded-xl bg-white p-6 shadow-lg">
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
								<Ticket className="h-6 w-6 text-primary" />
							</div>
							<h3 className="mb-2 text-xl font-semibold">
								Vouchers & Discounts
							</h3>
							<p className="text-gray-600">
								Earn and redeem vouchers for free rides and special discounts.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* How It Works */}
			<section id="how-it-works" className="bg-gray-50 py-16">
				<div className="container mx-auto px-4">
					<h2 className="mb-12 text-center text-3xl font-bold">How It Works</h2>
					<div className="grid gap-8 md:grid-cols-4">
						<div className="text-center">
							<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
								1
							</div>
							<h3 className="mb-2 text-xl font-semibold">Download</h3>
							<p className="text-gray-600">
								Get the Manfred app from your app store
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
								2
							</div>
							<h3 className="mb-2 text-xl font-semibold">Locate</h3>
							<p className="text-gray-600">
								Find available bikes near you on the map
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
								3
							</div>
							<h3 className="mb-2 text-xl font-semibold">Unlock</h3>
							<p className="text-gray-600">
								Scan the QR code or enter the bike number
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
								4
							</div>
							<h3 className="mb-2 text-xl font-semibold">Ride</h3>
							<p className="text-gray-600">
								Enjoy your ride and return the bike when done
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Download Section */}
			<section id="download" className="py-16">
				<div className="container mx-auto px-4">
					<div className="rounded-2xl bg-primary p-8 text-white md:p-12">
						<div className="mx-auto max-w-3xl text-center">
							<h2 className="mb-6 text-3xl font-bold md:text-4xl">
								Ready to ride with Manfred?
							</h2>
							<p className="mb-8 text-lg">
								Download our app now and get your first ride free!
							</p>
							<div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
								<Link
									href="#app-store"
									className="flex items-center justify-center rounded-lg bg-white px-6 py-3 text-black hover:bg-gray-100"
								>
									{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
									<svg
										className="mr-2 h-6 w-6"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path d="M17.5,12.5c0-0.28,0.22-0.5,0.5-0.5s0.5,0.22,0.5,0.5s-0.22,0.5-0.5,0.5S17.5,12.78,17.5,12.5z M16,8v8c0,1.1,0.9,2,2,2h4 c1.1,0,2-0.9,2-2V8c0-1.1-0.9-2-2-2h-4C16.9,6,16,6.9,16,8z M22,8v8h-6V8H22z M2,5l8,5l-8,5V5z M14,5H4v10h10c1.1,0,2-0.9,2-2V7 C16,5.9,15.1,5,14,5z" />
									</svg>
									App Store
								</Link>
								<Link
									href="#play-store"
									className="flex items-center justify-center rounded-lg bg-white px-6 py-3 text-black hover:bg-gray-100"
								>
									{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
									<svg
										className="mr-2 h-6 w-6"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path d="M3.18,20.83c0.44,0.36,0.95,0.57,1.49,0.57c0.55,0,1.06-0.21,1.49-0.57l6.9-5.44l-2.98-3.03L3.18,20.83z M20.77,11.53 c0.5-0.27,0.91-0.64,1.21-1.07c-0.94-0.96-7.03-4.27-7.03-4.27l-3.04,2.99L20.77,11.53z M21.99,10.38 C21.99,10.38,21.99,10.38,21.99,10.38L21.99,10.38C22,10.38,22,10.38,21.99,10.38c0,0.02,0,0.04,0,0.06 c0,0.02-0.01,0.04-0.01,0.06c-0.01,0.08-0.03,0.17-0.06,0.25c-0.03,0.08-0.06,0.15-0.09,0.22c-0.04,0.07-0.08,0.14-0.13,0.2 c-0.05,0.07-0.11,0.13-0.17,0.19c-0.06,0.06-0.12,0.11-0.19,0.16c-0.07,0.05-0.14,0.09-0.21,0.13c-0.13,0.06-0.27,0.1-0.42,0.11 c-0.01,0-0.02,0-0.03,0c-0.01,0-0.02,0-0.03,0h-0.02c-0.01,0-0.02,0-0.03,0c-0.07,0-0.15-0.01-0.22-0.03 c-0.07-0.02-0.14-0.04-0.21-0.06c-0.07-0.03-0.14-0.06-0.2-0.1c-0.07-0.04-0.13-0.08-0.19-0.13l-9.6-5.92l3.02-2.97l7.96,4.97 c0.05,0.02,0.09,0.05,0.13,0.07c0.04,0.02,0.08,0.05,0.12,0.07c0.08,0.06,0.16,0.12,0.23,0.19c0.07,0.07,0.13,0.15,0.18,0.23 c0.05,0.08,0.09,0.17,0.11,0.27c0.03,0.09,0.04,0.19,0.04,0.29c0,0.1-0.01,0.2-0.04,0.29c-0.03,0.09-0.07,0.18-0.11,0.27 c-0.05,0.08-0.11,0.16-0.18,0.23c-0.07,0.07-0.15,0.13-0.23,0.19c-0.04,0.03-0.08,0.05-0.12,0.07c-0.04,0.02-0.08,0.04-0.13,0.07 l-7.96,4.97l-3.02-2.97l9.6-5.92c0.06-0.05,0.12-0.09,0.19-0.13c0.07-0.04,0.13-0.07,0.2-0.1c0.07-0.03,0.14-0.05,0.21-0.06 c0.07-0.01,0.14-0.02,0.22-0.03c0.01,0,0.02,0,0.03,0h0.02c0.01,0,0.02,0,0.03,0c0.01,0,0.02,0,0.03,0 c0.15,0.01,0.29,0.05,0.42,0.11c0.07,0.03,0.14,0.07,0.21,0.13c0.07,0.05,0.13,0.1,0.19,0.16c0.06,0.06,0.12,0.12,0.17,0.19 c0.05,0.06,0.09,0.13,0.13,0.2c0.04,0.07,0.07,0.14,0.09,0.22c0.03,0.08,0.05,0.16,0.06,0.25c0,0.02,0.01,0.04,0.01,0.06 C22,10.34,22,10.36,21.99,10.38z M3.18,3.17C2.74,3.53,2.47,4.04,2.47,4.6v14.8c0,0.56,0.27,1.07,0.71,1.43l6.9-8.44L3.18,3.17z" />
									</svg>
									Google Play
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 py-12 text-white">
				<div className="container mx-auto px-4">
					<div className="grid gap-8 md:grid-cols-4">
						<div>
							<h3 className="mb-4 text-xl font-bold">Manfred</h3>
							<p className="text-gray-400">
								The easiest way to rent bikes in your city.
							</p>
						</div>
						<div>
							<h4 className="mb-4 font-semibold">Company</h4>
							<ul className="space-y-2 text-gray-400">
								<li>
									<Link href="#" className="hover:text-white">
										About Us
									</Link>
								</li>
								<li>
									<Link href="#" className="hover:text-white">
										Careers
									</Link>
								</li>
								<li>
									<Link href="#" className="hover:text-white">
										Press
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="mb-4 font-semibold">Support</h4>
							<ul className="space-y-2 text-gray-400">
								<li>
									<Link href="#" className="hover:text-white">
										Help Center
									</Link>
								</li>
								<li>
									<Link href="#" className="hover:text-white">
										Safety
									</Link>
								</li>
								<li>
									<Link href="#" className="hover:text-white">
										Contact Us
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="mb-4 font-semibold">Legal</h4>
							<ul className="space-y-2 text-gray-400">
								<li>
									<Link href="#" className="hover:text-white">
										Terms of Service
									</Link>
								</li>
								<li>
									<Link href="#" className="hover:text-white">
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link href="#" className="hover:text-white">
										Cookie Policy
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
						<p>
							© {new Date().getFullYear()} Manfred Bike Sharing. All rights
							reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

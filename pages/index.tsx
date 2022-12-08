import ApplicationTypeTile from "components/ApplicationTypeTile";
import ComunityBanner from "components/ComunityBanner";
import ContentTile from "components/content/ContentTile";
import ContentWrapper from "components/content/ContentWrapper";
import HeroContentTile from "components/content/HeroContentTile";
import PatternDots from "components/utils/PatternDots";
import DefaultWrapper from "components/wrapper/DefaultWrapper";
import Link from "next/link";
import { FaArrowRight, FaGithub, FaInnosoft } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div
        style={{ height: "64px" }}
        className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white "
      />
      <div className="text-gray-800 dark:text-white">
        <div className="relative py-5">
          <div className="absolute top-0 left-0 -z-[1] h-[90%] w-full overflow-hidden rounded-b-[60px] dark:z-0">
            <PatternDots />
            <div className="absolute h-full w-full bg-gradient-to-t from-transparent to-gray-100 dark:to-gray-700" />
          </div>

          <div className="container relative m-auto px-8">
            <div className="my-20">
              <h2 className="mb-3 text-4xl font-bold">Start Building</h2>
              <p className="text-2xl">
                Choose your application type to get started
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
              <ApplicationTypeTile
                id="native"
                image="https://via.placeholder.com/150?text=%20"
                title="Native/Mobile App"
                content="Mobile or Desktop app that runs natively on a device"
                example="e.g., IOS, Andriod"
              />
              <ApplicationTypeTile
                id="singlepage"
                image="https://via.placeholder.com/150?text=%20"
                title="Single-Page App"
                content="JavaScript web app that runs in the browser"
                example="e.g., AngularJS + Node.js, React"
              />
              <ApplicationTypeTile
                id="regular"
                image="https://via.placeholder.com/150?text=%20"
                title="Regular Web App"
                content="Traditional web app that runs on the server"
                example="e.g., Express.js, ASP.NET"
              />
              <ApplicationTypeTile
                id="backend"
                image="https://via.placeholder.com/150?text=%20"
                title="Backend/API"
                content="An API or service protected by Auth0"
                example="e.g., Express.js API, ASP.NET API"
              />
            </div>
          </div>
        </div>

        <div className="container m-auto py-8 px-4">
          <HeroContentTile
            title={"Stripe CLI"}
            href={""}
            tag={"Set Up The CLI"}
            description={
              "Interact with Stripe from your terminal to bootstrap sample projects, send test mode API requests, and debug your integration."
            }
            image={"https://via.placeholder.com/150?text=%20"}
          />
          <ContentWrapper title="Multiparty payments" href="">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
              <ContentTile
                title={"Accept online payments"}
                href={""}
                image={"https://via.placeholder.com/150?text=%20"}
                description={
                  "Build a payment form or use a prebuilt checkout page to accept online payments."
                }
                icon={<FaInnosoft size="20px" />}
                tags={["PAYMENTS"]}
              />
              <ContentTile
                title={"Create a subscription"}
                href={""}
                image={"https://via.placeholder.com/150?text=%20"}
                description={
                  "Set up recurring billing for your SaaS or e-commerce business."
                }
                icon={<FaInnosoft size="20px" />}
                tags={["BILLING"]}
              />
              <ContentTile
                title={"Receive payouts"}
                href={""}
                image={"https://via.placeholder.com/150?text=%20"}
                description={"Set up your bank account to receive payouts."}
                icon={<FaInnosoft size="20px" />}
                tags={["PAYMENTS"]}
              />
            </div>
          </ContentWrapper>
          <ContentWrapper title="Clone a sample project" href="">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
              <ContentTile
                title={"Accept a payments"}
                href={""}
                icon={<FaGithub size="20px" />}
                tags={["WEB", "IOS", "ANDROID"]}
              />
              <ContentTile
                title={"Start a simple subscription"}
                href={""}
                icon={<FaGithub size="20px" />}
                tags={["WEB", "MOBILE WEB"]}
              />
              <ContentTile
                title={"Use a prebuilt checkout form"}
                href={""}
                icon={<FaGithub size="20px" />}
                tags={["WEB", "MOBILE WEB"]}
              />
            </div>
          </ContentWrapper>
          <ContentWrapper title="Added github reposetry" href="">
            <>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
                <ContentTile
                  title={"How cards work"}
                  href={""}
                  description={
                    "See how a credit or debit card payment works online step by step."
                  }
                />
                <ContentTile
                  title={"Payouts"}
                  href={""}
                  description={"Set up your bank account to receive payouts."}
                />
                <ContentTile
                  title={"Declines"}
                  href={""}
                  description={"Identify causes and build automatic retires."}
                />
                <ContentTile
                  title={"Receipts"}
                  href={""}
                  description={"Send email receipts built by us or customized."}
                />
                <ContentTile
                  title={"Refunds"}
                  href={""}
                  description={
                    "Refund or cancel customers' payments and avoid dispute."
                  }
                />
                <ContentTile
                  title={"Wbhook events"}
                  href={""}
                  description={
                    "Get notified about payments events and trigger actions."
                  }
                />
              </div>
            </>
          </ContentWrapper>
        </div>
      </div>
      <ComunityBanner />
    </>
  );
}

Home.getLayout = function getLayout(page: JSX.Element) {
  return <DefaultWrapper>{page}</DefaultWrapper>;
};

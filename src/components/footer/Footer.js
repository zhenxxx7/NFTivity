import React from "react";
import { Footer } from "flowbite-react";

export default function App() {
    return (
        <div>
          <Footer container={true}>
            <div className="w-full text-center bg-primary dark:bg-secondary">
              <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                <Footer.Brand
                  href="https://flowbite.com"
                  src="https://flowbite.com/docs/images/logo.svg"
                  alt="Flowbite Logo"
                  name="NFTivity"
                />
                <Footer.LinkGroup>
                  <Footer.Link href="#">
                    About
                  </Footer.Link>
                  <Footer.Link href="#">
                    Privacy Policy
                  </Footer.Link>
                  <Footer.Link href="#">
                    Licensing
                  </Footer.Link>
                  <Footer.Link href="#">
                    Contact
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <Footer.Divider />
              <Footer.Copyright
                href="#"
                by="NFTivity™"
                year={2022}
              />
            </div>
          </Footer>
        </div>
    );
}
import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

export default function Faq() {
  return (
    <Accordion>
      <div className="center">
        <h1>Your Frequently Asked Questions</h1>
      </div>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>What does Your Space do?</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Your Space is a space sharing platform. People who own space that
            goes unused can list up on our website. People who want to use these
            spaces for different purposes can request to book them on Your Space
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            How does Your Space make money?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Your Space is using its resources to market your space, bring on new
            users and provide tools to make it easier to book your space! In
            exchange for this, we receive a small commission of 15% from each
            booking you receive.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Can the commission be decreased?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            The commission has been set considering the amount of services we
            are providing to both Spacers and Users to facilitate a successful
            booking. Unfortunately in order to continue to provide our services,
            we cannot decrease the commission.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}

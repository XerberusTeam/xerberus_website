import React from "react";

function Info() {
  return (
    <div className="flex flex-col items-center justify-center  m-10 lg:m-20 py-10">
      <h2 className="text-2xl lg:text-3xl font-bold uppercase">
        Protect your bags
      </h2>
      <p className="md:text-xl text-center py-10 w-[75vw]">
        We at Xerberus are developing a wallet watcher that helps you spot rug
        pulls and other events earlier to save your precious ADA balance. Nomad,
        Flickto, and other projects have shown us that our community needs
        something to protect their hard-earned bags. <br />
        As members of the Cardano community, we decide to be the change we want
        to see in our ecosystem.
      </p>
      <h2 className="text-2xl lg:text-3xl font-bold uppercase pt-10">
        How do the <span style={{ color: "#ff0000" }}>alerts</span> work?
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        <div className="flex flex-col text-center px-2">
          <h3 className="text-lg lg:text-xl font-bold py-10">Whale Alert</h3>
          <p className="">
            We observe all whales within a token ecosystem that alone could
            change the price of a token. We will inform you if a whale starts
            selling large amounts of tokens or consistently smaller quantities.
          </p>
        </div>
        <div className="flex flex-col text-center px-2">
          <h3 className="text-lg lg:text-xl font-bold py-10">
            Sentiment Alert
          </h3>
          <p>
            We scan Twitter for the sentiment of a token. We will inform you if
            the community opinion of the tokens rapidly falls or if it
            constantly falls over a more extended period.
          </p>
        </div>
        <div className="flex flex-col text-center px-2">
          <h3 className="text-lg lg:text-xl font-bold py-10">Velocity Alert</h3>
          <p>
            We scan the velocity of tokens, which is the speed of token
            exchange. Usually, a falling or growing momentum strongly signals
            that the price might fall or rise.
          </p>
        </div>
        <div className="flex flex-col text-center px-2">
          <h3 className="text-lg lg:text-xl font-bold py-10">Project Alert</h3>
          <p>
            We scan the project treasury wallets. We will inform you if we see
            unusual transactions that could distort the price. For example, such
            transactions could indicate a rug pull or blackmailing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;

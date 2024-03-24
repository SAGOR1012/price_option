import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const price_options = [
    {
      id: 1,
      name: "Basic Membership",
      features: [
        "Access to cardio equipment",
        "Access to weight training area",
        "Access vip washroom",
        "Free foods",
      ],
      price: 40,
    },
    {
      id: 2,
      name: "Premium Membership",
      features: [
        "Access to all equipment including specialized machines",
        "Unlimited group fitness classes",
      ],
      price: 60,
    },
    {
      id: 3,
      name: "Gold Membership",
      features: [
        "All features of Premium Membership",
        "Access to premium amenities (sauna, steam room, etc.)",
      ],
      price: 80,
    },
  ];

  return (
    <div className=" m-12">
      <h2 className="text-5xl">Best price in the town</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {price_options.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;

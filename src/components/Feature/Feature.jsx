import PropTypes from "prop-types";
import { FaRegCheckCircle } from "react-icons/fa";

const Feature = ({ feature }) => {
  return (
    <div className="">
      <p className="flex gap-2 items-center">
        <FaRegCheckCircle className="text-green-500 mr-2" />
        {feature}
      </p>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.string,
};
export default Feature;

import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function ContactShortcut() {
  return (
    <div className="text-center pt-8">
      <h3 className="text-2xl font-semibold mb-2">
        🚀 Let’s Elevate Your Brand
      </h3>
      <p className="text-gray-700 mb-4">
        Create compelling, consistent content that builds trust and drives
        results. Reach out today!
      </p>
      <Link to="/contact">
        <Button variant="contained" className="!bg-gray-800">
          Contact
        </Button>
      </Link>
    </div>
  );
}

export default ContactShortcut;

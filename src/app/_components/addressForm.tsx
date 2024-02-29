import { AddressElement } from "@stripe/react-stripe-js";

const AddressForm = () => {
  return (
    <>
      <AddressElement
        options={{ mode: "shipping" }}
        onChange={(event) => {
          if (event.complete) {
            // Extract potentially complete address
            const address = event.value.address;
          }
        }}
      />
    </>
  );
};

export default AddressForm;

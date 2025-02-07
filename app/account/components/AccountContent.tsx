"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { useUser } from "@/hooks/useUser";
import { postData } from "@/libs/helpers";
import { useRouter } from "next/navigation";
import useSubscribeModal from "@/hooks/useSubscribeModal";
import Button from "@/components/Button";

const AccountContent = () => {
  const router = useRouter();
  const subscribeModal = useSubscribeModal();
  const { isLoading, user, subscription } = useUser();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) router.replace("/");
  }, [isLoading, user, router]);

  const redirectToCustomerPortal = async () => {
    setLoading(true);
    try {
      const { url } = await postData({
        url: "/api/create-portal-link",
      });

      window.location.assign(url);
    } catch (error) {
      toast.error((error as Error).message);
    }
    setLoading(false);
  };

  return (
    <div className="mb-7 px-6">
      {!subscription && (
        <div className="flex flex-col gap-y-4">
          <p>No active plan</p>
          <Button className="w-[300px]" onClick={subscribeModal.onOpen}>
            Subscribe
          </Button>
        </div>
      )}
      {subscription && (
        <div className="flex flex-col gap-y-4">
          <p>
            You are currently on the{" "}
            <b>{subscription?.prices?.product?.name}</b> plan.
          </p>
          <Button
            className="w-[300px]"
            onClick={redirectToCustomerPortal}
            disabled={loading || isLoading}
          >
            Open customer portal
          </Button>
        </div>
      )}
    </div>
  );
};

export default AccountContent;

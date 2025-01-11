import { ArrowUpDown } from "lucide-react";

import { Button, ButtonProps } from "@/components/ui/button";

export const SwapButton = (props: ButtonProps) => {
  return (
    <Button type="button" variant="outline" size="icon" {...props}>
      <ArrowUpDown />
    </Button>
  );
};

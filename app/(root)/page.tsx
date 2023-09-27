"use client";

import Modal from "@/components/ui/modal";

export default function SetupPage() {
  return (
    <div className="p-4">
      <Modal title="test" description="test desc" isOpen onClose={() => {}}>
        Children
      </Modal>
    </div>
  );
}

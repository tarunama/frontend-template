import { FaqList } from '@/modules/support/components/FaqList';
import { SupportChannels } from '@/modules/support/components/SupportChannels';
import { DomainLayout } from '@/modules/core/components/DomainLayout';

export default function SupportPage() {
  return (
    <DomainLayout
      title="Customer support"
      description="Deliver proactive support experiences and keep service quality consistent at scale."
    >
      <SupportChannels />
      <FaqList />
    </DomainLayout>
  );
}

import { CampaignHighlights } from '@/modules/marketing/components/CampaignHighlights';
import { LeadLifecycle } from '@/modules/marketing/components/LeadLifecycle';
import { DomainLayout } from '@/modules/core/components/DomainLayout';

export default function MarketingPage() {
  return (
    <DomainLayout
      title="Marketing intelligence"
      description="Plan, launch, and measure campaigns across channels with a shared source of truth."
    >
      <CampaignHighlights />
      <LeadLifecycle />
    </DomainLayout>
  );
}

import { AccountSnapshot } from '@/modules/accounts/components/AccountSnapshot';
import { RenewalForecast } from '@/modules/accounts/components/RenewalForecast';
import { DomainLayout } from '@/modules/core/components/DomainLayout';

export default function AccountsPage() {
  return (
    <DomainLayout
      title="Account operations"
      description="Understand product adoption, renewal risk, and expansion opportunities for every customer."
    >
      <AccountSnapshot />
      <RenewalForecast />
    </DomainLayout>
  );
}

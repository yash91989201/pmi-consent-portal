import upiQr from './assets/upi-qr.jpeg';
import qr1 from '@/assets/qr-1.png';
import qr2 from '@/assets/qr-2.png';

export type BankAccount = {
  bankName: string;
  accountHolderName: string;
  accountNumber: string;
  ifscCode: string;
  branchName?: string;
  upiId?: string;
  qr: string;
};

export const BANK_ACCOUNTS: BankAccount[] = [
  {
    bankName: 'AXIS BANK',
    accountHolderName: 'PMI SERVICES ENTERPRISES',
    accountNumber: '926020017030914',
    ifscCode: 'UTIB0001398',
    upiId: 'pmiindia452-1@okaxis',
    qr: upiQr,
  },
  {
    bankName: 'Central Bank of India',
    accountHolderName: 'Kaptan Singh Bunkar (Account / Finance Manager)',
    accountNumber: '5994923883',
    ifscCode: 'CBIN0284853',
    branchName: 'Mahroni',
    qr: qr1,
  },
  {
    bankName: 'Central Bank of India',
    accountHolderName: 'Vikesh Rawat (Account / Finance Manager)',
    accountNumber: '4156485432',
    ifscCode: 'CBIN0280601',
    branchName: 'Mumbai Central',
    qr: qr2,
  },
];

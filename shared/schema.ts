import { z } from "zod";

export const platformOptions = ["Instagram", "YouTube", "Twitter"] as const;
export const contentTypeOptions = ["Reel", "Video", "Story", "Post"] as const;
export const frequencyOptions = ["Per Week", "Per Month", "One-time"] as const;

export const deliverableSchema = z.object({
  id: z.string(),
  platform: z.enum(platformOptions),
  contentType: z.enum(contentTypeOptions),
  quantity: z.number().min(1),
  frequency: z.enum(frequencyOptions),
  notes: z.string().optional(),
});

export type Deliverable = z.infer<typeof deliverableSchema>;

export const dealStatusOptions = ["Pending", "Active", "Completed"] as const;

export const dealSchema = z.object({
  id: z.string(),
  brandName: z.string().min(1),
  dealTitle: z.string().min(1),
  dealAmount: z.number().min(0),
  startDate: z.string(),
  endDate: z.string(),
  deliverables: z.array(deliverableSchema).min(1),
  status: z.enum(dealStatusOptions),
});

export type Deal = z.infer<typeof dealSchema>;

export const insertDealSchema = dealSchema.omit({ id: true, status: true });
export type InsertDeal = z.infer<typeof insertDealSchema>;

export const contractStatusOptions = ["Signed", "Active", "Completed"] as const;

export const contractSchema = z.object({
  id: z.string(),
  contractName: z.string(),
  brandName: z.string(),
  dealId: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  contractValue: z.number(),
  status: z.enum(contractStatusOptions),
  exclusive: z.boolean(),
  proofFileName: z.string().optional(),
  proofFilePath: z.string().optional(),
});

export type Contract = z.infer<typeof contractSchema>;

export const insertContractSchema = contractSchema.omit({ id: true });
export type InsertContract = z.infer<typeof insertContractSchema>;

export const invoiceStatusOptions = ["Unpaid", "Paid"] as const;

export const invoiceSchema = z.object({
  id: z.string(),
  invoiceNumber: z.string(),
  invoiceDate: z.string(),
  contractId: z.string(),
  dealId: z.string(),
  brandName: z.string(),
  influencerName: z.string(),
  contractFee: z.number(),
  platformFee: z.number(),
  totalAmount: z.number(),
  status: z.enum(invoiceStatusOptions),
});

export type Invoice = z.infer<typeof invoiceSchema>;

export const insertInvoiceSchema = invoiceSchema.omit({ id: true });
export type InsertInvoice = z.infer<typeof insertInvoiceSchema>;

export const influencerSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
});

export type Influencer = z.infer<typeof influencerSchema>;

export const users = null;
export const insertUserSchema = z.object({
  username: z.string(),
  password: z.string(),
});
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = { id: string; username: string; password: string };

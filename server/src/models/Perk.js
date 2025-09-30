import mongoose from 'mongoose';// inform a schema 
// mesh lazem all field to be filled 3ashan dah haga esmaha no sql database mesh lazem ykon 3ando schema bas mesh lazem ykon kol haga feha data

const perkSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },// lama tekon required this field must be filled
    description: { type: String },
    category: { type: String, enum: ['food', 'tech', 'travel', 'fitness', 'other'], default: 'other' },// law it was not filled al default value will be other
    discountPercent: { type: Number, min: 0, max: 100, default: 0 },
    merchant: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
);
// compound index to ensure unique title per merchant 
perkSchema.index({ title: 1, merchant: 1 }, { unique: true });//bykhaly al title and merchant unique ma3 ba3d

export const Perk = mongoose.model('Perk', perkSchema);

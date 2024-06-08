import { Schema, model, models } from 'mongoose';

const AppartmentSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    adress: {
      street: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
    },
    beds: {
      type: Number,
      required: true,
    },
    baths: {
      type: Number,
      required: true,
    },
    amenities: [
      {
        type: String,
      },
    ],
    rates: {
      nightly: {
        type: Number,
      },
      weekly: {
        type: Number,
      },
      monthly: {
        type: Number,
      },
    },
    images: [
      {
        type: String,
      },
    ],
    is_featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Appartment = models.Property || model('Appartment', AppartmentSchema);

export default Appartment;

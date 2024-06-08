import connectDB from '@/config/database';
import Appartment from '@/models/Appartment';

// GET /api/properties/featured
export const GET = async (request) => {
  try {
    await connectDB();

    const properties = await Appartment.find({
      is_featured: true,
    });

    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Something Went Wrong', { status: 500 });
  }
};

import cats from '../data/Cats'
import dogs from '../data/Dogs'

export default {
	cats,
	dogs,
	pets: [...cats, ...dogs]
}
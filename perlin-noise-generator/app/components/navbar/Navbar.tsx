import styles from "./navbar.module.css"

export const Navbar = () => {
  return (
    <div className="w-full h-20 md:h-16 bg-neutral-900 backdrop-blur-xl z-50 fixed">
      <div className="h-20 md:h-16 flex justify-between items-center px-12">
        <p className="font-semibold mx-8">Home</p>
        <p className="font-semibold mx-8">Perlin Noise Generator</p>
        <p className="font-semibold mx-8">Iggo</p>
      </div>
    </div>
  )
}

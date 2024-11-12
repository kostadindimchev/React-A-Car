const Footer = () => {
    return (
        <div className=" bg-slate-800 pb-4">
        <div className="flex flex-row space-x-16 bg-slate-700 text-white py-2">
            <p className="ml-8">Social networks:</p>
            <a href="https://github.com/kostadindimchev" className=" fa fa-github"></a>
            <a href="https://bg.linkedin.com/in/kostadin-dimchev-9975b4263" className=" fa fa-linkedin"></a>
        </div>
        <p className="text-white text-center">&copy; 2024 Copyright</p>
    </div>
    )
}

export default Footer;
/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722835620", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-r from-pink-400 to-purple-600 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
            <div id="footer-container" class="max-w-screen-xl p-8 mx-auto">
                <hr id="footer-divider" class="my-6 border-white border-opacity-20 sm:mx-auto lg:my-8">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-white hover:text-pink-200 transition-colors duration-300">
                            <img id="footer-logo" src="./images/logo.svg" class="h-10 mr-3 sm:h-12 filter brightness-0 invert" alt="Landwind Logo" />
                            BlockChainSight
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-sm text-center text-white text-opacity-90 hover:text-opacity-100 transition-opacity duration-300">
                        © 2023 BlockChainSight. Empowering blockchain analysis with real-time insights.
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});

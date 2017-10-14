import React, { Component } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson';

class D3Map extends Component {
	constructor(props) {
		super();

		this.state = {
			topology: null
		};
		
		this.url = "https://raw.githubusercontent.com/thinkingmachines/cartogramph/master/demo/data/provinces.json";
	}

	componentWillMount() {
        d3.queue()
          .defer(d3.json, this.url)
          .await((error, topology) => {
          		this.setState({
          			topology: topology
          		});
          });
	}

	componentDidUpdate() {
		const scale = 2500;
		// const translateX = -5050; // translateX more negative more left
		const translateX = -4700;
		const translateY = 880; // more positive more down	

		const projection = d3.geoMercator()
			.scale(scale)
		    .translate([translateX, translateY]);

		const path = d3.geoPath().projection(projection);

		const svg = d3.select(this.refs.anchor);

		let tooltip = d3.select("body").append("div")
						.attr("class", "tooltip");

		let { topology } = this.state;

		const philippines = topojson.feature(topology, {
			type: "GeometryCollection",
			geometries: topology.objects['provsh'].geometries
		});

		svg.selectAll("path")
			.data(philippines.features)
			.enter()
				.append("path")
				.attr("d", path)
				.style("fill", "#dee777")
				.style("stroke", "#7b8f8e")
				.style("stroke-width", "0.5px")
				.on("mouseover", function(d) {
					d3.select(this).style("fill", "#e67e7e");
					tooltip.style("opacity", 1);
					tooltip.html(d.properties["NAME_1"])
							.style("left", (d3.event.pageX + 30) + "px")
							.style("top", (d3.event.pageY - 30) + "px");
				})
				.on("mouseout", function(d) {
					d3.select(this).style("fill", "#dee777");

					tooltip.style("opacity", 0);
				});
	}

	render() {
		return(
			<g ref="anchor" />
		);
	}
}
export default D3Map;
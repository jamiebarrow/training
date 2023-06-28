# Architecture

This is a course that goes into topics related to software or system architecture.

I do not try and focus on specific certifications, standards, etc. as yet but there are some that may be relevant.

Topics that I feel are important related to software architecture, include but are not limited to:

- Security
- Reliability
- Resilience
- Performance
- Scalability
- Data Management
- Configuration Management
- Observability
- Failure Recovery
- Cost Optimization
- Capacity
- Automation
- Versioning
- Dependency Management
- Communication

## Tools

I like to communicate how systems work by making use of UML or at least diagrams that are understandable by all who will
be able to consume them. The best tool I've had experience with using is [Enterprise Architect][5] which is not only a
diagramming tool such as [Microsoft Visio][10], but is also a Model Driven Architecture (MDA) tool. It allows you to
define a model of your system, and then have different views of these entities of your system - e.g. having a component
in a logical diagram versus seeing how this component is deployed in a physical diagram, or having multiple diagrams
containing the same component but having to only change the model for this change to propogate throughout all diagrams
(views of the model). Similar tools are [StarUML][12] and [ARIS Express][11] which may be less feature packed and
cheaper (or free depending on versions), though there are also other alternatives in the market.

These are tools that can help humans understand the systems better, but also tools to help computers understand designs
better are schema based tools, such as XML Schema Definitions (XSD) which were popular in the days of SOAP XML based
web services and service oriented architecture (SOA). However with web services using to the more lightweight JSON
based structures, [JSON Schema][8] and [Swagger][9] (known now by the more standard OpenAPI) schema is also quite
powerful. Being able to generate code or documentation for example is a common use case where having strict contract
driven development processes can provide benefits.

## References

- [Azure Architecture Center][1]
- [Microsoft Azure Well-Architectred Framework][2]
- [The Open Group Architecture Framework (TOGAF)][3]
- [C4 model][4]
- [Sparx Systems Enterprise Architect][5]
- [Visio][10]
- [PlantUML][6]
- [Mermaid Diagramming and charting tool][7]
- [JSONSchema][8]
- [Swagger / OpenAPI][9]

[1]: https://learn.microsoft.com/en-us/azure/architecture/
[2]: https://learn.microsoft.com/en-us/azure/well-architected/
[3]: https://www.opengroup.org/togaf
[4]: https://c4model.com/
[5]: https://sparxsystems.com/products/ea/index.html
[6]: https://plantuml.com/
[7]: https://mermaid.js.org/
[8]: https://json-schema.org/
[9]: https://swagger.io/
[10]: https://www.microsoft.com/microsoft-365/visio/flowchart-software/
[11]: https://www.ariscommunity.com/aris-express
[12]: https://staruml.io/